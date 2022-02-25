package org.sonar.application.zuk;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;

public class ProcessRuntimeTest {

    public static void main(String[] args) {

        Process process = null;
        try {
            process = Runtime.getRuntime().exec("ipconfig");
            if(process.waitFor() != 0){
                System.exit(1);
            }
            InputStream is = process.getInputStream();
            BufferedReader br = new BufferedReader(new InputStreamReader(is));
            String temp = null;
            while ((temp = br.readLine()) != null) {
                System.out.println(new String(temp.getBytes("utf-8")));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println("abc");
    }

}
