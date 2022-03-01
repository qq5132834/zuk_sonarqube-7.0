package org.sonar.xoo.demo;

import org.apache.commons.io.FileUtils;
import org.sonar.api.batch.fs.FilePredicates;
import org.sonar.api.batch.fs.InputFile;
import org.sonar.api.batch.fs.TextRange;
import org.sonar.api.batch.fs.internal.DefaultInputFile;
import org.sonar.api.batch.fs.internal.TestInputFileBuilder;
import org.sonar.api.batch.rule.Severity;
import org.sonar.api.batch.sensor.Sensor;
import org.sonar.api.batch.sensor.SensorContext;
import org.sonar.api.batch.sensor.SensorDescriptor;
import org.sonar.api.batch.sensor.issue.NewIssue;
import org.sonar.api.batch.sensor.issue.NewIssueLocation;
import org.sonar.api.batch.sensor.issue.internal.DefaultIssueLocation;
import org.sonar.api.component.ResourcePerspectives;
import org.sonar.api.rule.RuleKey;
import org.sonar.xoo.Xoo;

import java.io.File;
import java.nio.file.Path;

public class DemoSensor implements Sensor {


    private final ResourcePerspectives perspectives;
    public DemoSensor(ResourcePerspectives perspectives) {
        this.perspectives = perspectives;
    }


    @Override
    public void describe(SensorDescriptor descriptor) {
        System.out.println("huangliao.DemoSensor.describe");
        //descriptor.name("Xoo Highlighting Sensor").onlyOnLanguages(Xoo.KEY);
    }

    @Override
    public void execute(SensorContext context) {
        System.out.println("huangliao.DemoSensor.execute");

        try{

            File baseDir = new File("C:/Users/51328/Desktop/sonarqube-7.0/sonarqube-7.0/extensions/plugins/");

            File symbol = new File(baseDir, "src/foo.xoo");
            FileUtils.write(symbol, "1:4:k\n12:15:cppd\n\n#comment");
            DefaultInputFile inputFile = new TestInputFileBuilder("foo", "src/foo.xoo")
                    .setLanguage("xoo")
                    .setModuleBaseDir(baseDir.toPath())
                    .initMetadata(" xoo\nazertyazer\nfoo")
                    .build();

            if (inputFile != null) {
                System.out.println("huangliao.DemoSensor.execute.inputFile.is.not.null");
                this.execute(context, inputFile);
            }
            else {
                System.out.println("huangliao.DemoSensor.execute.inputFile.is.null");
            }
        }catch (Exception e) {
            e.printStackTrace();
        }



    }


    public void execute(SensorContext sensorContext, InputFile file) {
        NewIssue newIssue = sensorContext.newIssue();

//        NewIssueLocation issueLocation = newIssue.newLocation()
//                .on(file)
//                .at(this.textRange(file));


        NewIssueLocation issueLocation = new DefaultIssueLocation()
                                            .on(file)
                                            .at(file.selectLine(3))
                                            .message("Foo");

        System.out.println("huangliao.DemoSensor.execute.save.start");
        newIssue.forRule(RuleKey.parse("huang:liao"))
                .at(issueLocation)
                .overrideSeverity(Severity.MAJOR)
                .save();
        System.out.println("huangliao.DemoSensor.execute.save.ok");

    }

    private TextRange textRange(InputFile inputFile) {
        Integer beginLine = 1;
        try {
            Integer endLine = 4;
            Integer beginColumn = 2;
            Integer endColumn = 3;
            return inputFile.newRange(beginLine, beginColumn - 1, endLine, endColumn);
        } catch (RuntimeException e) {
            System.out.println("huangliao.DemoSensor.execute.textRange.RuntimeException");
            return inputFile.selectLine(beginLine);
        }
    }

}
