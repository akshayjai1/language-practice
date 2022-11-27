public class RectangleArea223 {
	public int computeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2) {
		// area of individual rectangles
		int aa = (ax2 - ax1) * (ay2 - ay1);
		int ba = (bx2 - bx1) * (by2 - by1);

		/*
		 area of overlap;
		 consider x co-ordinate
			start b is less than end of a && end of b is greater than start of a
		 consider y co-ordinate
			start of
			we find top,left,right,bottom
		*/
		int left = Math.max(ax1, bx1);
		int right = Math.max(Math.min(ax2, bx2), left);
		int bottom = Math.max(ay1, by1);
		int top = Math.max(bottom, Math.min(ay2, by2));
		// overlapping area;
		int oa = (right - left) * (top - bottom);
		return aa + ba - oa;

	}
}
// https://leetcode.com/problems/rectangle-area/discuss/62138/My-Java-solution-Sum-of-areas-Overlapped-area
// https://leetcode.com/problems/rectangle-area/discuss/62149/Just-another-short-way/63846