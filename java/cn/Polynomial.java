public class Polynomial {
  DynamicArray d;

  /*
   * This function sets coefficient for a particular degree value, if degree is
   * not there in the polynomial
   * then corresponding term with specified degree and value is added int the
   * polynomial. If the degree
   * is already present in the polynomial then previous coefficient is replaced by
   * new coefficient value passed as function argument
   */
  public Polynomial() {
    d = new DynamicArray();
  }

  public Polynomial(DynamicArray nd) {
    d = new DynamicArray();
    for (int i = 0; i <= nd.getDegree(); i++) {
      if (nd.a[i] != 0) {
        d.set(i, nd.a[i]);
      }
    }
  }

  public void setCoefficient(int degree, int coeff) {
    // System.out.println("need to set degree = " + degree + " and co = " + coeff);
    d.set(degree, coeff);
  }

  public int getCoefficient(int degree) {
    // System.out.println("need to set degree = " + degree + " and co = " + coeff);
    return d.get(degree);
  }

  // Prints all the terms(only terms with non zero coefficients are to be printed)
  // in increasing order of degree.
  public void print() {
    // System.out.println("value of d.getDegree() = " + d.getDegree());
    for (int i = 0; i <= d.getDegree(); i++) {
      if (d.a[i] != 0) {
        System.out.print(d.a[i] + "x" + i + " ");
      }
    }
    System.out.println();
  }

  // Adds two polynomials and returns a new polynomial which has result
  public Polynomial add(Polynomial p) {
    DynamicArray pd = p.getArray();
    for (int i = 0; i <= pd.getDegree(); i++) {
      if (pd.a[i] != 0) {
        if (i > this.d.getDegree()) {
          this.d.set(i, pd.a[i]);
        } else {
          int current = this.d.get(i);
          this.d.set(i, current + pd.a[i]);
        }
      }
    }
    return this;
  }

  public Polynomial scalerMultiple(int scalar) {
    for (int i = 0; i <= d.getDegree(); i++) {
      if (d.a[i] != 0) {
        d.a[i] *= scalar;
      }
    }
    return this;
  }

  public DynamicArray getArray() {
    return d;
  }

  // Subtracts two polynomials and returns a new polynomial which has result
  public Polynomial subtract(Polynomial p) {
    // DynamicArray pd = p.getArray();
    // for (int i = 0; i <= pd.getDegree(); i++) {
    // if (pd.a[i] != 0) {
    // if (i >= this.d.getDegree()) {
    // this.d.set(i, -pd.a[i]);
    // } else {
    // int current = this.d.get(i);
    // this.d.set(i, current - pd.a[i]);
    // }
    // }
    // }
    // return this;
    this.add(p.scalerMultiple(-1));
    return this;
  }

  // Multiply two polynomials and returns a new polynomial which has result
  public Polynomial multiply1(Polynomial p) {
    Polynomial current = new Polynomial();
    DynamicArray pd = p.getArray();
    // System.out.println("pd.getDegree() = " + pd.getDegree());
    // System.out.println("input polynomial is = ");
    // p.print();
    for (int i = 0; i <= pd.getDegree(); i++) {
      Polynomial iter = new Polynomial(d);
      // iter.print();
      // System.out.println("iter polynomial before iteration");
      if (pd.a[i] != 0) {
        iter.oneMultiply(i, pd.a[i]);
        // System.out.println("new iter polynomial");
        // iter.print();
        current.add(iter);
      }
    }
    // System.out.println("printing multiply result");
    // current.print();
    return current;
  }

  public void oneMultiply(int degree, int coeff) {
    // System.out.println("in multiply function polynomials to be multiplied are" +
    // degree + " and co = " + coeff);
    // print();
    for (int i = d.getDegree() + degree; i >= 0; i--) {
      d.set(i, d.get(i - degree));
      if (i < degree) {
        d.set(i, 0);
      }
    }
    for (int i = degree; i <= d.getDegree(); i++) {
      d.a[i] *= coeff;
    }
  }

  public Polynomial multiply(Polynomial p) {
    Polynomial a = new Polynomial();
    for (int i = 0; i < d.getDegree(); i++) {
      for (int j = 0; j < p.d.getDegree(); j++) {
        if (d.a[i] != 0 && p.d.a[j] != 0) {
          int t = i + j;
          int l = d.a[i] * p.d.a[j];
          a.setCoefficient(t, a.d.get(t) + l);
        }
      }
    }
    return a;
  }
}
