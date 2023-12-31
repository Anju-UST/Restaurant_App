package com.cravio.authenticationservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRegistrationRequest {


    @NotEmpty(message = "Username is required")
    private String userName;

    @NotEmpty(message = "First name is required")
    private String userFirstName;

//    @NotEmpty(message = "Last name is required")
    private String userLastName;

    @NotEmpty(message = "Password is required")
//    @ValidPassword(message = "Password criteria does not match")
    private String userPassword;
    private String userAddress;

}
