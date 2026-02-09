import{jI as p}from"./iframe-_RRtoCIB.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BtNmzt7d.js";import"./index-Chi_LkuB.js";import"./useEntity-BpUor3p8.js";import"./pickBy-ePaWp_IF.js";import"./isString-Cnb8IIp5.js";import"./_baseIteratee-CgF3Cfek.js";import"./useQueries-BYmqsWy-.js";import"./useSuspenseQuery-IQfUTR9I.js";import"./useInfiniteQuery-DgvZk44b.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle--Th3pW8L.js";import"./useSchema-u_5L82-C.js";import"./index-5mYc3-AO.js";import"./enums-ZesOsblp.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-B8sjjX0y.js";import"./uniq-DHs7XRsC.js";import"./forEach-CWOCpBhE.js";import"./Add-CI4Sr0ye.js";import"./Grid-D3qunYmj.js";import"./ListItem-otaNrFJH.js";import"./listItemButtonClasses-r9wN2oqk.js";import"./ListItemIcon-WBxZlYLb.js";import"./MenuItem-CGSEVSsQ.js";import"./ListItemText-DkNJstNQ.js";import"./ArrowUpward-CyCuYw9i.js";import"./ContentCopy-M_wncy3m.js";import"./FormControlLabel-B8atO_7D.js";import"./Checkbox-D1j8OgqE.js";import"./SwitchBase-Dsoh1EuZ.js";import"./FormGroup-DrN9hl6S.js";import"./RadioGroup-D5QmT-Vd.js";import"./Radio-BqAq-yBa.js";import"./Slider-yfMBXade.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-ClTxt1UC.js";import"./DialogBase-Df86xRKf.js";import"./Close-B1mFQnan.js";import"./HelpPopover-BaNB0Qm4.js";import"./MarkdownPopover-Bys0kR41.js";import"./LightTooltip-CsErXMAn.js";import"./MarkdownSynapse-BNNvc1Ls.js";import"./SkeletonButton-CqYg87XU.js";import"./SkeletonInlineBlock-C6vP7s5M.js";import"./SkeletonTable-S1zm26Db.js";import"./SkeletonParagraph-D0b3NNq9.js";import"./JsonSchemaForm-B1zqBbFJ.js";import"./GridLegacy-Bb51sRUJ.js";import"./HelpTwoTone-BNq4erhn.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-D20l0XLr.js";import"./_createAggregator-CjgHDAL3.js";import"./_baseMap-BBX37T8P.js";import"./DateTimePicker-DMUweFbO.js";import"./useMobilePicker-B2aof2tV.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DL9Bjx-Z.js";import"./index-C48TJn2v.js";import"./Chip-jVD26EQu.js";import"./Tabs-BcXBWai1.js";import"./KeyboardArrowRight-B2TUe3xX.js";import"./Autocomplete-NPbSclpG.js";import"./usePreviousProps-CrPNx0Ry.js";import"./use-deep-compare-effect.esm-BJMH-Hbm.js";import"./TextWidget-i3lkF67v.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: \`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/\${mockSchemaBinding.jsonSchemaVersionInfo.$id}\`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property'
        },
        showStringArray: {
          type: 'boolean'
        }
      },
      required: ['country'],
      allOf: [{
        if: {
          properties: {
            country: {
              const: 'USA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            state: {
              type: 'string'
            }
          },
          required: ['state']
        }
      }, {
        if: {
          properties: {
            country: {
              const: 'CA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            province: {
              type: 'string'
            }
          },
          required: ['province']
        }
      }, {
        if: {
          properties: {
            showStringArray: {
              const: true
            }
          },
          required: ['showStringArray']
        },
        then: {
          properties: {
            stringArray: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }]
    }
  }
}`,...s.parameters?.docs?.source}}};const br=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,br as __namedExportsOrder,qr as default};
