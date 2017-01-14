/* env browser */
/* global $, Handlebars */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable no-throw-literal */
// TODO(pascal): figure out better linting for client-side JS

// TODO(pascal): get a real number
var NUMBER = '123-456-7890'


/**
 * CampaignView - view class which consumes a data object and a template id
 * provides a renderTo method for rendering the view into a node
 *
 * @param  {object} options
 * @return {view} view instance
 */
function CampaignView(options) {
  if (!options.data) throw ('CampaignView requires data')
  if (!options.templateId) throw ('CampaignView requires a templateId')

  this.data = options.data

  // store source template once
  var source = $(options.templateId).html()

  // create render method from template source
  this.render = Handlebars.compile(source)
}

CampaignView.prototype = {

  // generate html using handlebars render method
  toHtml: function toHtml() {
    return this.render(this.data)
  },

  // insert rendered html into a dom node
  renderTo: function renderTo(selector) {
    $(selector).html(this.toHtml())
  }

}

// campaign data object, used on both pages
var inauguration = {
  id: 'inauguration',
  name: '(Anti) Inauguration',
  number: NUMBER,
  description: 'Or, fill out the form below to stay up to date on actions opposing the new administration’s efforts to ruin everything. Already public pressure has reversed the GOP’s attempt to gut the ethics committee. Let’s continue this momentum. We are the majority.',
  url: 'staywoke/inauguration'
}
