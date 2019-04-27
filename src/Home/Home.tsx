import React, { PureComponent, ComponentClass } from 'react';
import { connect } from 'react-redux';
import { InjectedIntl, injectIntl } from 'react-intl';

interface HomeStateProps {
    intl: InjectedIntl;
}

export class Home extends PureComponent<HomeStateProps, {}> {
    render() {
        return (
            <section>{this.props.intl.formatMessage({ id: 'hello' })}</section>
        );
    }
}

export const ConnectedHome = connect<HomeStateProps, null>(
    null,
    null
)(injectIntl(Home as ComponentClass<any>)) as ComponentClass<any>;
