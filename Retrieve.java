package pack;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;

public class Retrive {

    public static void main(String[] args) {

        try {
            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

            Connection connection = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/db591",
                    "root",
                    "1234"
            );

            Statement statement = connection.createStatement();

            ResultSet rs = statement.executeQuery("SELECT * FROM employee");

            while (rs.next()) {

                int eid = rs.getInt("eid");       // get eid column
                String ename = rs.getString("ename"); // get ename column
                double esal = rs.getDouble("esal");   // get esal column

                System.out.println("Employee ID: " + eid);
                System.out.println("Employee Name: " + ename);
                System.out.println("Employee Salary: " + esal);
                System.out.println("------------------------");
            }

            connection.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
