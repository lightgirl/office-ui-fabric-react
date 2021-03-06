import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import './ContextualMenuExample.scss';

export class ContextualMenuHeaderExample extends React.Component<{}, {}> {

  public render(): JSX.Element {

    return (
      <DefaultButton
        id='ContextualMenuButton1'
        text='Click for ContextualMenu'
        menuProps={
          {
            shouldFocusOnMount: true,
            items: [
              {
                key: 'Actions',
                itemType: 2,
                text: 'Actions'
              },
              {
                key: 'upload',
                iconProps: {
                  iconName: 'Upload',
                  style: {
                    color: 'salmon'
                  }
                },
                text: 'Upload',
                title: 'Upload a file'
              },
              {
                key: 'rename',
                text: 'Rename'
              },
              {
                key: 'share',
                iconProps: {
                  iconName: 'Share'
                },
                subMenuProps: {
                  items: [
                    {
                      key: 'sharetoemail',
                      text: 'Share to Email',
                      iconProps: {
                        iconName: 'Mail'
                      },
                    },
                    {
                      key: 'sharetofacebook',
                      text: 'Share to Facebook',
                    },
                    {
                      key: 'sharetotwitter',
                      text: 'Share to Twitter',
                      iconProps: {
                        iconName: 'Share'
                      },
                    },
                  ],
                },
                text: 'Sharing'
              },
              {
                key: 'navigation',
                itemType: 2,
                text: 'Navigation'
              },
              {
                key: 'properties',
                text: 'Properties'
              },
              {
                key: 'print',
                iconProps: {
                  iconName: 'Print'
                },
                text: 'Print'
              },

              {
                key: 'Bing',
                text: 'Go to Bing',
                href: 'http://www.bing.com'
              },
            ]
          } }
      />
    );
  }
}
