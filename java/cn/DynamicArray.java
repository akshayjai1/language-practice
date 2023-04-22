public class DynamicArray {

  int[] a;
  // int next;

  public DynamicArray() {
    a = new int[10];
  }

  public void restructure() {
    int[] t = a;
    // System.out.println("value of a.length = " + a.length);
    a = new int[a.length * 2];
    for (int i = 0; i < t.length; i++) {
      a[i] = t[i];
    }
  }

  // public void add(int v) {
  // if (next == a.length) {
  // restructure();
  // }
  // a[next] = v;
  // next++;
  // return;
  // }

  public void set(int k, int v) {
    while (k > a.length - 1) {
      restructure();
    }
    a[k] = v;
    return;
  }

  /**
   * @param k
   * @return returns coefficient
   */
  public int get(int k) {
    if (k < 0) {
      return 0;
    }
    if (k < a.length) {
      return a[k];
    }
    return 0;
  }

  public int getDegree() {
    for (int i = a.length - 1; i > -1; i--) {
      if (a[i] != 0) {
        return i;
      }
    }
    return 0;
  }
}
