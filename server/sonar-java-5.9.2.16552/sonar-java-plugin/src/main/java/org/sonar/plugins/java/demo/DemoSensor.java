package org.sonar.plugins.java.demo;

import org.sonar.api.batch.sensor.Sensor;
import org.sonar.api.batch.sensor.SensorContext;
import org.sonar.api.batch.sensor.SensorDescriptor;

public class DemoSensor implements Sensor {
    @Override
    public void describe(SensorDescriptor descriptor) {
        System.out.println("huangliao.DemoSensor.describe");
    }

    @Override
    public void execute(SensorContext context) {
        System.out.println("huangliao.DemoSensor.execute");
    }
}
