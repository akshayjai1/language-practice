public class ComplexNumber {
  // Complete this class
  private int real;
  private int imaginary;

  public ComplexNumber(int real, int imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  public void plus(ComplexNumber c) {
    this.real = (this.real + c.real);
    this.imaginary = (this.imaginary + c.imaginary);
  }

  public void multiply(ComplexNumber c) {
    int i = this.imaginary;
    int ci = c.imaginary;
    int r = this.real;
    int cr = c.real;
    this.imaginary = i * r + ci * r;
    this.real = r * cr + i * ci;
  }

  public void print() {
    System.out.println(this.real + " + i" + this.imaginary);
  }

  public static void main(String args[]) {
    ComplexNumber c = new ComplexNumber(3, 4);
    ComplexNumber d = new ComplexNumber(2, 5);
    c.print();
    c.plus(d);
    print();
    c.multiply(d);
    c.print();


  }
}
