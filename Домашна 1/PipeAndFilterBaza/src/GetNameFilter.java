import java.util.Arrays;

public class GetNameFilter implements Filter<String>{
    @Override
    public String execute(String input) {
        String[] data = input.split(",");
        String[] names = Arrays.copyOfRange(data,16,20);
        StringBuilder result = new StringBuilder();
        for (String name : names) {
            if (!name.equals("None")) {
                result.append(String.format("%s,",name));
                break;
            }
        }
        if(result.isEmpty()){
            return null;
        }
        for(int i=0;i<16;i++){
            result.append(String.format("%s,",data[i]));
        }
        for(int i=21;i<data.length;i++){
            result.append(String.format("%s,",data[i]));
        }
        return result.toString();
    }
}
