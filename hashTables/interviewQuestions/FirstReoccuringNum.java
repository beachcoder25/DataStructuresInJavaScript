import java.util.*;

public class FirstReoccuringNum{

  public static int firstRecurring(int[] a){
    HashSet<Integer> hs = new HashSet<>();
    for(int i=0; i < a.length; i++){
      if(!hs.contains(a[i])){
        hs.add(a[i]);
      } else{
        return a[i];
      }
    }

    return -1;
  }

  public static void main(String[] args){
    int[] a1 = {2,5,1,2,3,5,1,2,4};
    int[] a2 = {2,1,1,2,3,5,1,2,4};
    int[] a3 = {2,3,4,5};

    System.out.println(firstRecurring(a1));
    System.out.println(firstRecurring(a2));
    System.out.println(firstRecurring(a3));
  }
}