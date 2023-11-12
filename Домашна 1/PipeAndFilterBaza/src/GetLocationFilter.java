import java.util.Arrays;

public class GetLocationFilter implements Filter<String>{
    @Override
    public String execute(String input) {
//       Zaharchev Winery and Distillery,way/1221269982,way/1221269982,Кавадарци,16,1430,Косовска,None,None,yes,MKD,winery,None,None,None,None,None,Mo-Su 08:00-22:00,SJ,070 253 103,None,None,None,https://www.zaharchev.mk/,"POLYGON ((22.0048024 41.436124, 22.0048268 41.4361972, 22.0047454 41.436185, 22.0047292 41.4361301, 22.0048024 41.436124))",
        String location = null;
        if(input==null){
            return null;
        }
        String[] data = input.split(",");
        if(input.contains("POLYGON")){
            // zamenime POLYGON so POINT i da zememe samo prv par vrednosti
            int info = input.indexOf("POLYGON");
            location = input.substring(info,input.length()-1);
            location = location.replace("POLYGON","POINT").substring(0,30).replace(",",")").replaceFirst("\\(","").trim();
        }
        else {
            location = data[24];
            if(location.equals("geometry")){
                location = "location";
            }
        }
        if(!location.equals("location")){
            String change = location.substring(7,location.length()-1);
            String[] values = change.split("\\s+");
            location = String.format("%s,%s",values[1],values[0]);
        }
        else{
            location = "longitude,latitude";
        }
        StringBuilder sb = new StringBuilder();
        sb.append(String.format("%s,",data[0]));
        sb.append(String.format("%s,",location));
        for(int i=1;i<data.length-1;i++){
            sb.append(String.format("%s,",data[i]));
        }
        return sb.toString();
    }
}
