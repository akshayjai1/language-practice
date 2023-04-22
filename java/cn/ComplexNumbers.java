public class ComplexNumbers {
  // Complete this class
  private int real;
  private int imaginary;

  public ComplexNumbers(int real, int imaginary){
    this.real = real;this.imaginary = imaginary;
  }
  public void setReal(int real){
    this.real = real;
  }
  public void setImaginary(int imaginary){
    this.imaginary = imaginary;
  }
  public int getReal(){
    return this.real;
  }
  public int getImaginary(){
    return imaginary;
  }
  public void plus(ComplexNumbers c){
    int i = this.imaginary + c.getImaginary();
    int r = this.real + c.getReal();
    setReal(r);
    setImaginary(i);
  }
  public void multiply(ComplexNumbers c){
    int i = this.imaginary;
    int ci = c.getImaginary();
    int r = this.real;
    int cr = c.getReal();
    int ii = i*r + ci *r;
    int rr = r * cr + i * ci;
    setReal(r);
    setImaginary(i);
  }
  public void print(){
    System.out.println(this.real + " i"+this.imaginary );
  }


}
