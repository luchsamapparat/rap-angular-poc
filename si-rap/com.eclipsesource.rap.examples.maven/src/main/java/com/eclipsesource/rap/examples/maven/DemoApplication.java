package com.eclipsesource.rap.examples.maven;

import org.eclipse.rap.rwt.RWT;
import org.eclipse.rap.rwt.application.EntryPoint;
import org.eclipse.rap.rwt.client.service.JavaScriptExecutor;
import org.eclipse.rap.rwt.widgets.WidgetUtil;
import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Font;
import org.eclipse.swt.graphics.FontData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.*;
import org.eclipse.rap.rwt.client.service.ClientFileLoader;
import org.eclipse.swt.widgets.Label;

public class DemoApplication implements EntryPoint {

	private String buttonText = "Hello Maven World";

	public void setButtonText(String buttonText) {
		this.buttonText = buttonText;
	}

	public int createUI() {
		Display display = new Display();
		Shell mainShell = new Shell(display, SWT.TITLE);
		mainShell.setText("RAP Maven Demo");
		mainShell.setMaximized(true);
		mainShell.setLayout(new GridLayout());

        ClientFileLoader loader = RWT.getClient().getService(ClientFileLoader.class);
        loader.requireJs(RWT.getResourceManager().getLocation( "main.js" ));
        loader.requireJs(RWT.getResourceManager().getLocation( "polyfills.js" ));
        loader.requireJs(RWT.getResourceManager().getLocation( "runtime.js" ));
        loader.requireJs(RWT.getResourceManager().getLocation( "styles.js" ));
        loader.requireJs(RWT.getResourceManager().getLocation( "vendor.js" ));

        Label container1Title = new Label(mainShell, SWT.NONE);
        container1Title.setText("Component #1");
        container1Title.setFont(new Font(mainShell.getDisplay(), "Arial", 16, SWT.BOLD));

        Label container1 = new Label(mainShell, SWT.NONE);
        setEntryId(container1, "si-component-one");
		container1.setText("Loading component #1");


        Label container2Title = new Label(mainShell, SWT.NONE);
        container2Title.setText("Component #2");
        container2Title.setFont(new Font( mainShell.getDisplay(), "Arial", 16, SWT.BOLD));

		Label container2 = new Label(mainShell, SWT.NONE);
        setEntryId(container2, "si-component-two");
        container2.setText("Loading component #2");


        mainShell.layout();
		mainShell.open();
		return 0;
	}

	private void setEntryId(Widget widget, String id) {
        String widgetId= WidgetUtil.getId(widget);
        exec("rap.getObject('", widgetId, "').", "$el", ".attr('si-entry-id', '", id + "' );" );
    }

    private void exec(String... strings) {
        StringBuilder builder = new StringBuilder();
        builder.append("try {");

        for(String str : strings) {
            builder.append(str);
        }

        builder.append("} catch (e) {}");

        JavaScriptExecutor executor = RWT.getClient().getService(JavaScriptExecutor.class);
        executor.execute(builder.toString());
    }
}
