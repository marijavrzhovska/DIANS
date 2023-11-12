public class GetCityFilter implements Filter<String>{
    @Override
    public String execute(String input) {
        if(input==null){
            return null;
        }
        String[] data = input.split(",");
        String city = data[5];
        if(city.equals("addr:city")){
            city = "city";
        }
        StringBuilder sb = new StringBuilder();
        sb.append(String.format("%s,",data[0]));
        sb.append(String.format("%s,",data[1]));
        sb.append(String.format("%s,",data[2]));
        sb.append(String.format("%s,",city));
        for(int i=3;i<5;i++){
            sb.append(String.format("%s,",data[i]));
        }
        for(int i=6;i<data.length;i++){
            sb.append(String.format("%s,",data[i]));
        }
        return sb.toString();
    }
}
