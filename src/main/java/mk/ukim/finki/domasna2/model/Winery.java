package mk.ukim.finki.domasna2.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "Winery table")
@NoArgsConstructor
public class Winery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(unique = true)
    private String name;


    @Column(unique = true)
    private Double longitude;


    @Column(unique = true)
    private Double latitude;

    private String city;
    private String street;
    private String phone;
    private String website;
    private String workHours;

    @Column(length = 700)
    private String description;

    @JsonIgnore
    @OneToMany(mappedBy = "winery")
    private List<Comment> comments;

    @JsonIgnore
    @OneToMany(mappedBy = "winery")
    private List<Rate> rates;

    private Double rating;

    public Winery(String name, Double longitude, Double latitude, String city, String street,
                  String phone, String website, String workHours, String description) {
        this.name = name;
        this.longitude = longitude;
        this.latitude = latitude;
        this.city = city;
        this.street = street;
        this.phone = phone;
        this.website = website;
        this.workHours = workHours;
        this.description = description;
        this.comments = new ArrayList<>();
        this.rates = new ArrayList<>();
        this.rating = 0.0;
    }


}
