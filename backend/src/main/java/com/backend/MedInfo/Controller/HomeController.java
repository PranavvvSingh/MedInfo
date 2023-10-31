package com.backend.MedInfo.Controller;

import com.backend.MedInfo.Data.Response;
import com.backend.MedInfo.Service.ServiceLayer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

@CrossOrigin
@RestController
public class HomeController {
    private final ServiceLayer serviceLayer;
    private final String featuredUrl="https://api.digitalmedia.hhs.gov/api/v2/resources/media/featured.json";
    private final String popularUrl="https://api.digitalmedia.hhs.gov/api/v2/resources/media/mostPopularMedia.json";
    private final String searchUrl="https://api.digitalmedia.hhs.gov/api/v2/resources/media.json";


    @Autowired
    public HomeController(ServiceLayer serviceLayer) {
        this.serviceLayer = serviceLayer;
    }

    @GetMapping("/featured")
    public ResponseEntity<Response> getFeaturedData(){
        return new ResponseEntity<Response>(serviceLayer.consumeApi(featuredUrl), HttpStatus.OK);
    }

    @GetMapping("/popular")
    public ResponseEntity<Response> getPopularData(){
        return new ResponseEntity<Response>(serviceLayer.consumeApi(popularUrl), HttpStatus.OK);
    }

    @GetMapping("/search/{text}")
    public ResponseEntity<Response> getSearchData(@PathVariable String text){
        UriComponentsBuilder uri=UriComponentsBuilder.fromHttpUrl(searchUrl);
        uri.queryParam("nameContains",text);
        return new ResponseEntity<Response>(serviceLayer.consumeApi(uri.toUriString()),HttpStatus.OK);
    }
}
