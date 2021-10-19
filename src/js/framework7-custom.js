
import Framework7, { request, utils, getDevice, createStore } from 'framework7/lite';
import Appbar from 'framework7/components/appbar';
import Dialog from 'framework7/components/dialog';
import Popup from 'framework7/components/popup';
import LoginScreen from 'framework7/components/login-screen';
import Popover from 'framework7/components/popover';
import Actions from 'framework7/components/actions';
import Sheet from 'framework7/components/sheet';
import Toast from 'framework7/components/toast';
import Preloader from 'framework7/components/preloader';
import Progressbar from 'framework7/components/progressbar';
import Sortable from 'framework7/components/sortable';
import Swipeout from 'framework7/components/swipeout';
import Accordion from 'framework7/components/accordion';
import ContactsList from 'framework7/components/contacts-list';
import VirtualList from 'framework7/components/virtual-list';
import ListIndex from 'framework7/components/list-index';
import Timeline from 'framework7/components/timeline';
import Tabs from 'framework7/components/tabs';
import Panel from 'framework7/components/panel';
import Card from 'framework7/components/card';
import Chip from 'framework7/components/chip';
import Form from 'framework7/components/form';
import Input from 'framework7/components/input';
import Checkbox from 'framework7/components/checkbox';
import Radio from 'framework7/components/radio';
import Toggle from 'framework7/components/toggle';
import Range from 'framework7/components/range';
import Stepper from 'framework7/components/stepper';
import SmartSelect from 'framework7/components/smart-select';
import Grid from 'framework7/components/grid';
import Calendar from 'framework7/components/calendar';
import Picker from 'framework7/components/picker';
import InfiniteScroll from 'framework7/components/infinite-scroll';
import PullToRefresh from 'framework7/components/pull-to-refresh';
import Lazy from 'framework7/components/lazy';
import DataTable from 'framework7/components/data-table';
import Fab from 'framework7/components/fab';
import Searchbar from 'framework7/components/searchbar';
import Messagebar from 'framework7/components/messagebar';
import Swiper from 'framework7/components/swiper';
import Notification from 'framework7/components/notification';
import Autocomplete from 'framework7/components/autocomplete';
import Tooltip from 'framework7/components/tooltip';
import Skeleton from 'framework7/components/skeleton';
import Menu from 'framework7/components/menu';
import Treeview from 'framework7/components/treeview';
import Typography from 'framework7/components/typography';
import Messages from 'framework7/components/messages';

Framework7.use([
  Appbar,
  Dialog,
  Popup,
  LoginScreen,
  Popover,
  Actions,
  Sheet,
  Toast,
  Preloader,
  Progressbar,
  Sortable,
  Swipeout,
  Accordion,
  ContactsList,
  VirtualList,
  ListIndex,
  Timeline,
  Tabs,
  Panel,
  Card,
  Chip,
  Form,
  Input,
  Checkbox,
  Radio,
  Toggle,
  Range,
  Stepper,
  SmartSelect,
  Grid,
  Calendar,
  Picker,
  InfiniteScroll,
  PullToRefresh,
  Lazy,
  DataTable,
  Fab,
  Searchbar,
  Messagebar,
  Swiper,
  Notification,
  Autocomplete,
  Tooltip,
  Skeleton,
  Menu,
  Treeview,
  Typography,
  Messages
]);

export default Framework7;
export { request, utils, getDevice, createStore };
