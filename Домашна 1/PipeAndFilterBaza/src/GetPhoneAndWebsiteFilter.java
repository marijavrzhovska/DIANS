public class GetPhoneAndWebsiteFilter implements Filter<String>{
    @Override
    public String execute(String input) {
//      name,location,city,street,attraction,building,country,craft,email,industrial,int_name,landuse,man_made,opening_hours,operator,phone,shop,tasting,tourism,website,
        if(input==null){
            return null;
        }
        String[] data = input.split(",");
        String phone = data[16];
        String website = data[20];
        StringBuilder sb = new StringBuilder();
        for(int i=0;i<5;i++){
            sb.append(String.format("%s,",data[i]));
        }
        sb.append(String.format("%s,",phone));
        sb.append(String.format("%s",website));
        return sb.toString();
    }
}
