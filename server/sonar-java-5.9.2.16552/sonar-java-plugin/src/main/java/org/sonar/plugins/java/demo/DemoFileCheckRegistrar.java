package org.sonar.plugins.java.demo;

import org.sonar.api.utils.log.Logger;
import org.sonar.api.utils.log.Loggers;
import org.sonar.plugins.java.api.CheckRegistrar;
import org.sonar.plugins.java.api.JavaCheck;
import org.sonar.plugins.java.demo.checkrule.RulesList;

public class DemoFileCheckRegistrar implements CheckRegistrar {

    private static final Logger LOG = Loggers.get(DemoFileCheckRegistrar.class);

    @Override
    public void register(RegistrarContext registrarContext) {
        System.out.println("huangliao." + this.getClass().getSimpleName());
        LOG.info("huangliao." + this.getClass().getSimpleName());
        Iterable<Class<? extends JavaCheck>> checkClasses = RulesList.getJavaChecks();
        Iterable<Class<? extends JavaCheck>> testCheckClasses = RulesList.getJavaTestChecks();
        registrarContext.registerClassesForRepository(DemoRulesDefinition.REPOSITORY_KEY, checkClasses, testCheckClasses);
    }
}
