package org.sonar.plugins.java.demo;

import org.sonar.api.resources.Language;

public class DemoLanguage implements Language {
    @Override
    public String getKey() {
        return "java";
    }

    @Override
    public String getName() {
        return "java";
    }

    @Override
    public String[] getFileSuffixes() {
        return new String[]{"java"};
    }
}
