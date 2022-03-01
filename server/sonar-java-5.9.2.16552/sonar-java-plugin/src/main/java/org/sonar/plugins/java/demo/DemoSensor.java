package org.sonar.plugins.java.demo;

import org.sonar.api.batch.fs.FilePredicates;
import org.sonar.api.batch.fs.InputFile;
import org.sonar.api.batch.fs.TextRange;
import org.sonar.api.batch.rule.Severity;
import org.sonar.api.batch.sensor.Sensor;
import org.sonar.api.batch.sensor.SensorContext;
import org.sonar.api.batch.sensor.SensorDescriptor;
import org.sonar.api.batch.sensor.issue.NewExternalIssue;
import org.sonar.api.batch.sensor.issue.NewIssue;
import org.sonar.api.batch.sensor.issue.NewIssueLocation;
import org.sonar.api.batch.sensor.issue.internal.DefaultExternalIssue;
import org.sonar.api.config.Configuration;
import org.sonar.api.rule.RuleKey;
import org.sonar.api.rules.RuleType;
import org.sonar.api.utils.Version;
import org.sonar.api.utils.log.Logger;
import org.sonar.api.utils.log.Loggers;
import org.sonar.java.externalreport.PmdSensor;
import org.sonar.java.externalreport.SpotBugsXmlReportReader;

import javax.xml.namespace.QName;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.events.Attribute;
import javax.xml.stream.events.StartElement;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class DemoSensor implements Sensor {

    private static final Logger LOG = Loggers.get(DemoSensor.class);

    @Override
    public void describe(SensorDescriptor descriptor) {
        System.out.println("huangliao.DemoSensor.describe");
    }

    @Override
    public void execute(SensorContext context) {

        System.out.println("huangliao.DemoSensor.execute");
        System.out.println("huangliao.DemoSensor.execute." + context.getClass().getName());
        Configuration configuration = context.config();
        System.out.println("huangliao.DemoSensor.execute.configuration:" + configuration.toString());
        Version version = context.getSonarQubeVersion();
        System.out.println("huangliao.DemoSensor.execute.version:" + version.toString());
        NewIssue issue = context.newIssue();
        if(issue == null){
            System.out.println("huangliao.DemoSensor.issue is null");
        }
        else {
            System.out.println("huangliao.DemoSensor.issue is not null");
        }

        NewExternalIssue newExternalIssue = context.newExternalIssue();


        FilePredicates predicates = context.fileSystem().predicates();
        inputFile = context.fileSystem().inputFile(predicates.hasPath("C:\\Users\\51328\\Desktop\\sonarqube-7.0\\sonarqube-7.0\\extensions\\plugins\\demo.xml"));

        this.onViolationStartElement(context);

        //NewExternalIssue newExternalIssue = context.newExternalIssue();


    }

    private void onViolationStartElement(SensorContext context) {
        try {
            TextRange textRange = textRange();
            RuleKey ruleKey = RuleKey.of(PmdSensor.LINTER_KEY, "huangliaoRule");
            NewExternalIssue issue = context.newExternalIssue()
                    .forRule(ruleKey)
                    .type(RuleType.CODE_SMELL)
                    .severity(Severity.MAJOR)
                    .remediationEffortMinutes(10l)
                    ;
            NewIssueLocation issueLocation = issue.newLocation()
                    .on(inputFile)
                    .at(textRange);
            StringBuilder issueMessage = new StringBuilder();
        } catch (RuntimeException e) {
//            int lineNumber = element.getLocation().getLineNumber();
//            LOG.warn("Can't import issue at line " + lineNumber + " in " + reportFile + ": " + e.getMessage());
//            issue = null;
        }
    }

    private static Map<Integer, Severity> severities() {
        Map<Integer, Severity> map = new HashMap<>();
        map.put(1, Severity.BLOCKER);
        map.put(2, Severity.CRITICAL);
        map.put(3, Severity.MAJOR);
        map.put(4, Severity.MINOR);
        map.put(5, Severity.INFO);
        return map;
    }

    private static String getAttributeValue(StartElement startElement, String attributeName) {
        Attribute attribute = startElement.getAttributeByName(new QName(attributeName));
        return attribute == null ? "" : attribute.getValue();
    }

    private InputFile inputFile = null;
    private TextRange textRange() {
        Integer beginLine = 1;
        try {
            Integer endLine = 10;
            Integer beginColumn = 2;
            Integer endColumn = 3;
            return inputFile.newRange(beginLine, beginColumn - 1, endLine, endColumn);
        } catch (RuntimeException e) {
            // Some PMD rules seem to report invalid line offsets, e.g. TooManyStaticImports
            return inputFile.selectLine(beginLine);
        }
    }



//    private static final String LINTER_NAME = "Checkstyle";
//    private static final String LANGUAGE_KEY = "java";
//    public static final String REPORT_PROPERTY_KEY = "sonar.java.checkstyle.reportPaths";
//    public static final String LINTER_KEY = "checkstyle";
//
//    public static final ExternalRuleLoader RULE_LOADER = new ExternalRuleLoader(
//            LINTER_KEY,
//            LINTER_NAME,
//            "org/sonar/l10n/java/rules/checkstyle/rules.json",
//            LANGUAGE_KEY);
//
//    private static void saveIssue(SensorContext context, InputFile inputFile, String key, String line, String message) {
//        RuleKey ruleKey = RuleKey.of(CheckstyleSensor.LINTER_KEY, key);
//        ExternalIssueUtils.saveIssue(context, RULE_LOADER, inputFile, ruleKey, line, message);
//
//    }

}
