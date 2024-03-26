package com.java.starrynight.service;

import com.java.starrynight.dto.Request.ForgetPasswordRequest;
import com.java.starrynight.dto.Request.LoginRequest;
import com.java.starrynight.dto.Request.RegisterRequest;
import com.java.starrynight.dto.Response.BasicResponse;
import com.java.starrynight.dto.Response.LoginResponse;

public interface AuthenticationService {
    
    BasicResponse<String> register(RegisterRequest registerRequest);

    BasicResponse<LoginResponse> login(LoginRequest loginRequest);

    BasicResponse<String> forgotPassword(ForgetPasswordRequest forgetPasswordRequest);

}
