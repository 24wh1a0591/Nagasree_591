package pack;

import java.sql.Connection;

import java.sql.DriverManager;

import java.sql.Statement;

public class ExcuteUpdate {


	public static void main(String[] args) {


		        try {

		            // step 1: register the Driver

		            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());


		            // step2: Connect to the server

		            Connection connection = DriverManager.getConnection(

		                    "jdbc:mysql://localhost:3306/db591",

		                    "root",

		                    "1234"

		            );


		            // step3: create Statement object

		            Statement statement = connection.createStatement();


		            // step4: execute UPDATE query

		            int rows = statement.executeUpdate(

		                    "UPDATE employee SET esal = 60000 WHERE eid = 1"

		            );


		            // step5: display result

		            System.out.println(rows + " record updated successfully");


		            // step6: close connection

		            connection.close();


		        } catch (Exception e) {

		            e.printStackTrace();

		        }

		    }

		}