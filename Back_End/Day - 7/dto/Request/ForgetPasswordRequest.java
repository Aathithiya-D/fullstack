package com.java.starrynight.dto.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ForgetPasswordRequest {

    private String email;
    private String currentPassword;
    private String newPassword;
    private String confirmPassword;
    
}
