import React, { Fragment } from 'react';
import { List, Segment, Header, Label } from 'semantic-ui-react';

const colors = {
  merged: 'violet',
  closed: 'red',
  open: 'green'
};

const EventList = ({ title, eventArray, iconName }) => (
  <Fragment>
    <Header as="h2" attached="top">
      {title}
    </Header>
    <Segment attached>
      {eventArray.length > 0 ? (
        <List divided relaxed>
          {eventArray.map(event => (
            <List.Item key={event.id}>
              <List.Icon name={iconName} />
              <List.Content>
                <List.Header as="a" href={event.url}>
                  {event.name}
                  {event.status && (
                    <Label
                      style={{ marginLeft: '10px' }}
                      color={colors[event.status]}
                      size="tiny">
                      {event.status}
                    </Label>
                  )}
                </List.Header>
              </List.Content>
            </List.Item>
          ))}
        </List>
      ) : (
        `No ${title} to show`
      )}
    </Segment>
  </Fragment>
);

export default EventList;
