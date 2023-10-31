package com.backend.MedInfo.Service;

import com.backend.MedInfo.Data.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ServiceLayer {
    private final RestTemplate restTemplate;

    @Autowired
    public ServiceLayer(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public Response consumeApi(String url){
        return restTemplate.getForObject(url,
                Response.class);
    }
}
