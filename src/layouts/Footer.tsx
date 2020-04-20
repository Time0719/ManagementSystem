import React, { memo } from 'react';
import {
    Typography, Link
} from '../utilities/material-ui.index';


export const FooterView = memo((): any => (
    <Typography variant="body2" color="textSecondary" align="center">
        <Link color="inherit" href="http://www.lanyee.net/" target="_blank">
            {`© ${new Date().getFullYear()} 上海览逸信息科技有限公司`}
        </Link>
    </Typography>
));

