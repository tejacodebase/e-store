package com.arts.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ArtsDTO {
    private String uuid;

    @JsonProperty("price")
    private Double price;

    @JsonProperty("category_uuid")
    private String departmentUuid;
    @JsonProperty("category_name")
    private String departmentName;

}
