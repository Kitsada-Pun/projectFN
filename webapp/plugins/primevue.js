import PrimeVue from 'primevue/config'
// * Service
import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice'
import TerminalService from 'primevue/terminalservice'

// * Directive
import Tooltip from 'primevue/tooltip'
import BadgeDirective from 'primevue/badgedirective'
import FocusTrap from 'primevue/focustrap'
import StyleClass from 'primevue/styleclass'

// * Form
import AutoComplete from 'primevue/autocomplete'
import Calendar from 'primevue/calendar'
import CascadeSelect from 'primevue/cascadeselect'
import Checkbox from 'primevue/checkbox'
import Chips from 'primevue/chips'
import ColorPicker from 'primevue/colorpicker'
import Dropdown from 'primevue/dropdown'
// import Editor from 'primevue/editor'; // install quill dependency.
import InputMask from 'primevue/inputmask'
import InputNumber from 'primevue/inputnumber'
import InputSwitch from 'primevue/inputswitch'
import InputText from 'primevue/inputtext'
import Knob from 'primevue/knob'
import Listbox from 'primevue/listbox'
import MultiSelect from 'primevue/multiselect'
import Password from 'primevue/password'
import RadioButton from 'primevue/radiobutton'
import Rating from 'primevue/rating'
import SelectButton from 'primevue/selectbutton'
import Slider from 'primevue/slider'
import Textarea from 'primevue/textarea'
import ToggleButton from 'primevue/togglebutton'
import TreeSelect from 'primevue/treeselect'
import TriStateCheckbox from 'primevue/tristatecheckbox'

// * Button
import Button from 'primevue/button'
import SpeedDial from 'primevue/speeddial'
import SplitButton from 'primevue/splitbutton'

// * Data
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' // optional
import Row from 'primevue/row' // optional
import DataView from 'primevue/dataview'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions' // optional
import OrderList from 'primevue/orderlist'
import OrganizationChart from 'primevue/organizationchart'
import Paginator from 'primevue/paginator'
import PickList from 'primevue/picklist'
import Tree from 'primevue/tree'
import TreeTable from 'primevue/treetable'
import Timeline from 'primevue/timeline'
import VirtualScroller from 'primevue/virtualscroller'

// * Panal
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import Card from 'primevue/card'
import DeferredContent from 'primevue/deferredcontent'
import Divider from 'primevue/divider'
import Fieldset from 'primevue/fieldset'
import Panel from 'primevue/panel'
import ScrollPanel from 'primevue/scrollpanel'
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Toolbar from 'primevue/toolbar'

// * Overlay
import ConfirmDialog from 'primevue/confirmdialog'
import ConfirmPopup from 'primevue/confirmpopup'
import Dialog from 'primevue/dialog'
import DynamicDialog from 'primevue/dynamicdialog'
import OverlayPanel from 'primevue/overlaypanel'
import Sidebar from 'primevue/sidebar'

// * File
import FileUpload from 'primevue/fileupload'

// * Menu
import Breadcrumb from 'primevue/breadcrumb'
import ContextMenu from 'primevue/contextmenu'
import Dock from 'primevue/dock'
import Menu from 'primevue/menu'
import Menubar from 'primevue/menubar'
import MegaMenu from 'primevue/megamenu'
import PanelMenu from 'primevue/panelmenu'
import Steps from 'primevue/steps'
import TabMenu from 'primevue/tabmenu'
import TieredMenu from 'primevue/tieredmenu'

// * Chart
// import Chart from 'primevue/chart'; // install chart.js dependency.

// * Messages
import Message from 'primevue/message'
import InlineMessage from 'primevue/inlinemessage'
import Toast from 'primevue/toast'

// * Media
import Carousel from 'primevue/carousel'
import Galleria from 'primevue/galleria'
import Image from 'primevue/image'

// * Misc
import Avatar from 'primevue/avatar'
import AvatarGroup from 'primevue/avatargroup' // Optional for grouping
import Badge from 'primevue/badge'
import BlockUI from 'primevue/blockui'
import Chip from 'primevue/chip'
import Inplace from 'primevue/inplace'
import ScrollTop from 'primevue/scrolltop'
import Skeleton from 'primevue/skeleton'
import ProgressBar from 'primevue/progressbar'
import ProgressSpinner from 'primevue/progressspinner'
import Tag from 'primevue/tag'
import Terminal from 'primevue/terminal'

export default defineNuxtPlugin(nuxtApp => {
  console.log('PrimeVue init')
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })

  // * Services
  nuxtApp.vueApp.use(ConfirmationService)
  nuxtApp.vueApp.use(DialogService)
  nuxtApp.vueApp.use(ToastService)
  nuxtApp.vueApp.use(TerminalService)

  // * Directive
  nuxtApp.vueApp.directive('tooltip', Tooltip)
  nuxtApp.vueApp.directive('badge', BadgeDirective)
  nuxtApp.vueApp.directive('focustrap', FocusTrap)
  nuxtApp.vueApp.directive('styleclass', StyleClass)

  // * Form
  nuxtApp.vueApp.component('AutoComplete', AutoComplete)
  nuxtApp.vueApp.component('Calendar', Calendar)
  nuxtApp.vueApp.component('CascadeSelect', CascadeSelect)
  nuxtApp.vueApp.component('Checkbox', Checkbox)
  nuxtApp.vueApp.component('Chips', Chips)
  nuxtApp.vueApp.component('ColorPicker', ColorPicker)
  nuxtApp.vueApp.component('Dropdown', Dropdown)
  // nuxtApp.vueApp.component("Editor", Editor); // install quill dependency.
  nuxtApp.vueApp.component('InputMask', InputMask)
  nuxtApp.vueApp.component('InputNumber', InputNumber)
  nuxtApp.vueApp.component('InputSwitch', InputSwitch)
  nuxtApp.vueApp.component('InputText', InputText)
  nuxtApp.vueApp.component('Knob', Knob)
  nuxtApp.vueApp.component('Listbox', Listbox)
  nuxtApp.vueApp.component('MultiSelect', MultiSelect)
  nuxtApp.vueApp.component('Password', Password)
  nuxtApp.vueApp.component('RadioButton', RadioButton)
  nuxtApp.vueApp.component('Rating', Rating)
  nuxtApp.vueApp.component('SelectButton', SelectButton)
  nuxtApp.vueApp.component('Slider', Slider)
  nuxtApp.vueApp.component('Textarea', Textarea)
  nuxtApp.vueApp.component('ToggleButton', ToggleButton)
  nuxtApp.vueApp.component('TreeSelect', TreeSelect)
  nuxtApp.vueApp.component('TriStateCheckbox', TriStateCheckbox)

  // * Button
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('SpeedDial', SpeedDial)
  nuxtApp.vueApp.component('SplitButton', SplitButton)

  // * Data
  nuxtApp.vueApp.component('DataTable', DataTable)
  nuxtApp.vueApp.component('Column', Column)
  nuxtApp.vueApp.component('ColumnGroup', ColumnGroup)
  nuxtApp.vueApp.component('Row', Row)
  nuxtApp.vueApp.component('DataView', DataView)
  nuxtApp.vueApp.component('DataViewLayoutOptions', DataViewLayoutOptions)
  nuxtApp.vueApp.component('OrderList', OrderList)
  nuxtApp.vueApp.component('OrganizationChart', OrganizationChart)
  nuxtApp.vueApp.component('Paginator', Paginator)
  nuxtApp.vueApp.component('PickList', PickList)
  nuxtApp.vueApp.component('Tree', Tree)
  nuxtApp.vueApp.component('TreeTable', TreeTable)
  nuxtApp.vueApp.component('Timeline', Timeline)
  nuxtApp.vueApp.component('VirtualScroller', VirtualScroller)

  // * Panal
  nuxtApp.vueApp.component('Accordion', Accordion)
  nuxtApp.vueApp.component('AccordionTab', AccordionTab)
  nuxtApp.vueApp.component('Card', Card)
  nuxtApp.vueApp.component('DeferredContent', DeferredContent)
  nuxtApp.vueApp.component('Divider', Divider)
  nuxtApp.vueApp.component('Fieldset', Fieldset)
  nuxtApp.vueApp.component('Panel', Panel)
  nuxtApp.vueApp.component('ScrollPanel', ScrollPanel)
  nuxtApp.vueApp.component('Splitter', Splitter)
  nuxtApp.vueApp.component('SplitterPanel', SplitterPanel)
  nuxtApp.vueApp.component('TabView', TabView)
  nuxtApp.vueApp.component('TabPanel', TabPanel)
  nuxtApp.vueApp.component('Toolbar', Toolbar)

  // * Overlay
  nuxtApp.vueApp.component('ConfirmDialog', ConfirmDialog)
  nuxtApp.vueApp.component('ConfirmPopup', ConfirmPopup)
  nuxtApp.vueApp.component('Dialog', Dialog)
  nuxtApp.vueApp.component('DynamicDialog', DynamicDialog)
  nuxtApp.vueApp.component('OverlayPanel', OverlayPanel)
  nuxtApp.vueApp.component('Sidebar', Sidebar)

  // * File
  nuxtApp.vueApp.component('FileUpload', FileUpload)

  // * Menu
  nuxtApp.vueApp.component('Breadcrumb', Breadcrumb)
  nuxtApp.vueApp.component('ContextMenu', ContextMenu)
  nuxtApp.vueApp.component('Dock', Dock)
  nuxtApp.vueApp.component('Menu', Menu)
  nuxtApp.vueApp.component('Menubar', Menubar)
  nuxtApp.vueApp.component('MegaMenu', MegaMenu)
  nuxtApp.vueApp.component('PanelMenu', PanelMenu)
  nuxtApp.vueApp.component('Steps', Steps)
  nuxtApp.vueApp.component('TabMenu', TabMenu)
  nuxtApp.vueApp.component('TieredMenu', TieredMenu)

  // * Chart
  // nuxtApp.vueApp.component('Chart', Chart) // install chart.js dependency.

  // * Messages
  nuxtApp.vueApp.component('Message', Message)
  nuxtApp.vueApp.component('InlineMessage', InlineMessage)
  nuxtApp.vueApp.component('Toast', Toast)

  // * Media
  nuxtApp.vueApp.component('Carousel', Carousel)
  nuxtApp.vueApp.component('Galleria', Galleria)
  nuxtApp.vueApp.component('Image', Image)

  // * Misc
  nuxtApp.vueApp.component('Avatar', Avatar)
  nuxtApp.vueApp.component('AvatarGroup', AvatarGroup)
  nuxtApp.vueApp.component('Badge', Badge)
  nuxtApp.vueApp.component('BlockUI', BlockUI)
  nuxtApp.vueApp.component('Chip', Chip)
  nuxtApp.vueApp.component('Inplace', Inplace)
  nuxtApp.vueApp.component('ScrollTop', ScrollTop)
  nuxtApp.vueApp.component('Skeleton', Skeleton)
  nuxtApp.vueApp.component('ProgressBar', ProgressBar)
  nuxtApp.vueApp.component('ProgressSpinner', ProgressSpinner)
  nuxtApp.vueApp.component('Tag', Tag)
  nuxtApp.vueApp.component('Terminal', Terminal)
})
