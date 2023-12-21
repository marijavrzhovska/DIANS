package mk.ukim.finki.domasna2.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "winery_ratings")
public class Rate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ID;

    private Integer rate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "winery_id")
    private Winery winery;

    public Rate(Integer rate) {
        this.rate = rate;
    }

    public Rate() {

    }
}
