package org.sonar.plugins.java.demo;

import org.sonar.api.profiles.ProfileDefinition;
import org.sonar.api.profiles.RulesProfile;
import org.sonar.api.utils.ValidationMessages;

/***
 * 暂时不要，因为server启动可能报错
 */
public class DemoProfileDefinition extends ProfileDefinition {
    @Override
    public RulesProfile createProfile(ValidationMessages validation) {
        return new RulesProfile();
    }
}
