package com.cravio.authenticationservice.service;


import com.cravio.authenticationservice.dto.UserRegistrationRequest;
import com.cravio.authenticationservice.model.Role;
import com.cravio.authenticationservice.model.User;
import com.cravio.authenticationservice.repository.RoleRepository;
import com.cravio.authenticationservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

import static java.lang.Long.MIN_VALUE;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
//    @Autowired
//    private KitchenStaffRepository kitchenStaffRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void initRoleAndUser() {

        Role adminRole = new Role();
        adminRole.setRoleName("Admin");
        adminRole.setRoleDescription("Admin Role: Top Priority");
        roleRepository.save(adminRole);

        Role userRole = new Role();
        userRole.setRoleName("User");
        userRole.setRoleDescription("User Role: Restricted Priority");
        roleRepository.save(userRole);

        Role kitchenStaffRole = new Role();
        kitchenStaffRole.setRoleName("KitchenStaff");
        kitchenStaffRole.setRoleDescription("KitchenStaff Role: Specialized Priority");
        roleRepository.save(kitchenStaffRole);

        User adminUser = new User();
        adminUser.setUserName("admin");
        adminUser.setUserPassword(getEncodedPassword("password"));
        adminUser.setUserFirstName("admin_first");
        adminUser.setUserLastName("admin_last");
        adminUser.setUserAddress("Not Applicable");
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        adminUser.setRole(adminRoles);
        userRepository.save(adminUser);
    }

    public ResponseEntity<User> registerNewUser(UserRegistrationRequest userRegistrationRequest) {
        Optional<User> opt = userRepository.findById(userRegistrationRequest.getUserName());
        if(opt.isPresent()){
            return ResponseEntity.notFound().build();
        }
        else{
            User user = new User();
            user.setUserid(IdGenerator.generateUniqueId());
            user.setUserName(userRegistrationRequest.getUserName());
            user.setUserFirstName(userRegistrationRequest.getUserFirstName());
            user.setUserLastName(userRegistrationRequest.getUserLastName());
            user.setUserPassword(getEncodedPassword(userRegistrationRequest.getUserPassword()));
            user.setUserAddress(userRegistrationRequest.getUserAddress());
            Role userRole = roleRepository.findById("User").orElseThrow(() -> new RuntimeException("User role not found"));
            Set<Role> userRoles = new HashSet<>();
            userRoles.add(userRole);
            user.setRole(userRoles);
            return ResponseEntity.ok(userRepository.save(user));
        }
    }

    public ResponseEntity<User> registerNewKitchenStaff(UserRegistrationRequest userRegistrationRequest) {
        Optional<User> opt = userRepository.findById(userRegistrationRequest.getUserName());
        if(opt.isPresent()){
            return ResponseEntity.notFound().build();
        }
        else{
            User user = new User();
            user.setUserid(IdGenerator.generateUniqueId());
            user.setUserName(userRegistrationRequest.getUserName());
            user.setUserFirstName(userRegistrationRequest.getUserFirstName()); //restaurantper
            user.setUserLastName("Restaurant");
            user.setUserPassword(getEncodedPassword(userRegistrationRequest.getUserPassword()));
            user.setUserAddress("Not Applicable");
            Role userRole = roleRepository.findById("KitchenStaff").orElseThrow(() -> new RuntimeException("KitchenStaff role not found"));
            Set<Role> userRoles = new HashSet<>();
            userRoles.add(userRole);
            user.setRole(userRoles);

            return ResponseEntity.ok(userRepository.save(user));
        }
    }




    private String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }

    public class IdGenerator {
        public static long generateUniqueId(){
            Random random = new Random();
            long id = random.nextLong() + MIN_VALUE;
            return Math.abs(id);
        }
    }
}
