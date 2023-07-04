package com.ust.cartservice.exception;

public class CartnotFoundException extends RuntimeException{

    public CartnotFoundException(String message) {
        super(message);
    }
}
