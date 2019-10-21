import Vue from 'vue'
import {
  Affix, Anchor, AutoComplete, Alert, Avatar, BackTop,
  Badge, Breadcrumb, Button, Calendar, Card, Collapse,
  Carousel, Cascader, Checkbox, Col, DatePicker,
  Divider, Dropdown, Form, Icon, Input, InputNumber,
  Layout, List, LocaleProvider, message, Menu, Modal,
  notification, Pagination, Popconfirm, Popover,
  Progress, Radio, Rate, Row, Select, Slider, Spin,
  Steps, Switch, Table, Transfer, Tree, TreeSelect,
  Tabs, Tag, TimePicker, Timeline, Tooltip, Upload
} from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'

Vue.prototype.$message = message

Vue.use(Affix)
Vue.use(Modal)
Vue.use(Form)
Vue.use(Spin)
Vue.use(Input)