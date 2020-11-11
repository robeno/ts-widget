import { h, VNode } from 'preact';

import HelloWorld from '../src';
import './styles';

export default function App(): VNode {
    return (
        <div id="app">
            <section class="hero">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h2 class="is-size-2 has-text-weight-bold">ts-widget</h2>
                        <h6 class="is-size-6">ts-widget component for Preact</h6>
                        <a class="button" href="https://github.com/rschristian/preact-hint">
                            Check it out on GitHub
                        </a>
                    </div>
                </div>
            </section>
            <div class="section main-content">
                <div class="container">
                    <h3 class="is-size-3">ts-widget</h3>
                    <div class="shields mt-1">
                        <a href="https://github.com/rschristian/ts-widget/blob/master/LICENSE">
                            <img alt="NPM" src="https://img.shields.io/npm/l/ts-widget?color=blue" />
                        </a>
                        <a href="https://bundlephobia.com/result?p=ts-widget">
                            <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/ts-widget" />
                        </a>
                        <a href="https://npmjs.org/package/ts-widget">
                            <img
                                alt="0 Dependencies"
                                src="https://img.shields.io/david/rschristian/ts-widget?color=blue"
                            />
                        </a>
                        <a href="https://npmjs.org/package/ts-widget">
                            <img alt="TS Support" src="https://img.shields.io/npm/types/ts-widget" />
                        </a>
                    </div>
                    <div class="mt-2">
                        ts-widget is a component for <a href="https://preactjs.com">Preact</a>.
                    </div>
                    <HelloWorld />
                    <h4 class="is-size-4 mt-5 mb-2">Installation</h4>
                    <pre>
                        <code>yarn add ts-widget</code>
                    </pre>
                    <h4 class="is-size-4 mt-5 mb-2">General Usage</h4>
                    <pre>
                        <code>{`import Widget from 'ts-widget';
import 'ts-widget/dist/index.css';

export default function App() {
    return <Widget />;
}`}</code>
                    </pre>
                </div>
            </div>
            <footer class="footer">
                <div class="container has-text-centered">
                    <span>&copy; 2020 Ryan Christian</span>
                </div>
            </footer>
        </div>
    );
}
