package org.sonar.application.zuk;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.List;

public class ProcessBuilderTest {

    public static void main(String[] args) throws Exception {
        List<String> cmdList = Arrays.asList("ipconfig");
        ProcessBuilder pb = new ProcessBuilder(cmdList);
        Process process = pb.start();
        if(process.waitFor() != 0){
            System.exit(1);
        }
        InputStream is = process.getInputStream();
        BufferedReader br = new BufferedReader(new InputStreamReader(is));
        String temp = null;
        while ((temp = br.readLine()) != null) {
            System.out.println(new String(temp.getBytes("utf-8"), "utf-8"));
        }
    }

}
