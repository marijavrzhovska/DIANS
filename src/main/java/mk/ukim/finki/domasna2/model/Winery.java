package mk.ukim.finki.domasna2.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "Winery table")
@NoArgsConstructor
@AllArgsConstructor
public class Winery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(unique = true)
    @NotEmpty
    @Positive
    private String name;

    @NotNull
    @Column(unique = true)
    @NotEmpty
    @Positive
    private String longitude;


    @NotNull
    @Column(unique = true)
    @NotEmpty
    @Positive
    private String latitude;

    private String city;
    private String street;
    private String phone;
    private String website;
    private String workHours;
    private String description;



    public void setId(Long id) {
        this.id = id;
    }

    @Id
    public Long getId() {
        return id;
    }
}
