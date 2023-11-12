public class PutNoneFilter implements Filter<String>{
    @Override
    public String execute(String input) {
        String[] parts = input.split(",");
        StringBuilder sb = new StringBuilder();
        for(String part : parts){
            if(part == "") {
                part = "None";
            }
            sb.append(part).append(",");
        }
        return sb.toString();
    }
}
