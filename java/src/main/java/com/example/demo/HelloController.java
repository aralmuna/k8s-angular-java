package com.example.demo;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class HelloController {

    @GetMapping(name = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public String index() {
        return "{\"message\": \"Hello from Spring Boot! Date: " + new Date() +"\"}";
    }

}