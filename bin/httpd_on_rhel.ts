#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { HttpdOnRhelStack } from '../lib/httpd_on_rhel-stack';

const app = new cdk.App();
new HttpdOnRhelStack(app, 'HttpdOnRhelStack');