import React, { Fragment } from 'react';
import { List, Segment, Header } from 'semantic-ui-react';

const EventList = ({ title, eventArray, iconName }) => (
  <Fragment>
    <Header as="h2" attached="top">
      {title}
    </Header>
    <Segment attached>
      <List divided relaxed>
        {eventArray &&
          eventArray.map(event => (
            <List.Item>
              <List.Icon name={iconName} />
              <List.Content>
                <List.Header
                  as="a"
                  href={`https://github.com/${event.repo.name}`}>
                  {event.repo.name}
                </List.Header>
              </List.Content>
            </List.Item>
          ))}
      </List>
    </Segment>
  </Fragment>
);

export default EventList;
