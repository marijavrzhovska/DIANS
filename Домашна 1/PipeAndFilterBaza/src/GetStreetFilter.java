import java.util.Arrays;

public class GetStreetFilter implements Filter<String>{
    @Override
    public String execute(String input) {
        if(input==null){
            return null;
        }
        String[] data = input.split(",");
        String[] components = Arrays.copyOfRange(data,6,9);
        String result = null;
        boolean flag = false;
        StringBuilder sb = new StringBuilder();
        StringBuilder sb2 = new StringBuilder();
        String test = components[2];
        if(test.equals("addr:street")){
            flag = true;
        }
        if(!test.equals("None")){
            sb.append(String.format("ул.%s",test)).append(" ");
        }
        else{
            result = "None";
        }
        test = components[0];
        if(!sb.isEmpty()){
            if(!test.equals("None")){
                sb.append(String.format("бр.%s",test)).append(" ");
            }
        }
        test = components[1];
        if(!sb.isEmpty()){
            if(!test.equals("None")){
                sb.append(test);
            }
        }
        for(int i=0;i<4;i++){
            sb2.append(String.format("%s,",data[i]));
        }
        if(flag){
                sb2.append("street,");
        }
        else {
            if (!sb.toString().equals("")) {
                sb2.append(String.format("%s,", sb.toString().trim()));
            } else {
                sb2.append(String.format("%s,", result));
            }
        }
        for(int i=10;i<data.length;i++){
            sb2.append(String.format("%s,",data[i]));
        }

        return sb2.toString();
    }
}
