import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.util.*;

public class Main {
    public static void main(String[] args) throws FileNotFoundException {
        ClassLoader cl = Main.class.getClassLoader();
        Scanner scanner = new Scanner(new File(cl.getResource("osm_data.csv").getFile()));

        Pipe<String> pipe1 = new Pipe<>();

        PutNoneFilter filter1 = new PutNoneFilter(); // stava None za polinja bez vrednosti
        GetNameFilter filter2 = new GetNameFilter(); // se zemaat iminjata na vinariite
        GetLocationFilter filter3 = new GetLocationFilter(); // se zemaat lokaciite na vinariite na Google Maps spored longitude i latitude
        GetCityFilter filter4 = new GetCityFilter(); // se zemaat gradovite, vo koi se naogjaat vinariite
        GetStreetFilter filter5 = new GetStreetFilter(); // se zemaat ulicite, vo koi se naogjaat vinariite
        GetPhoneAndWebsiteFilter filter6 = new GetPhoneAndWebsiteFilter(); // se zemaat telefonskite broevi i web-stranite na vinariite

        pipe1.addFilter(filter1);
        pipe1.addFilter(filter2);
        pipe1.addFilter(filter3);
        pipe1.addFilter(filter4);
        pipe1.addFilter(filter5);
        pipe1.addFilter(filter6);

        StringBuilder sb = new StringBuilder();
        while(scanner.hasNextLine()){
            String line = scanner.nextLine();
            String updatedLine = pipe1.runFilters(line);
            if(updatedLine!=null) {
                System.out.println(updatedLine);
                sb.append(String.format("%s\n",updatedLine));
            }
        }
        try(FileWriter newFile = new FileWriter("dataZaBaza.csv")){
            newFile.write(sb.toString());
            System.out.println("CSV File created...");
        }
        catch(Exception e){

        }
    }
}