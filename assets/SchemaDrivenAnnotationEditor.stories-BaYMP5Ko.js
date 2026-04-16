import{jx as p}from"./iframe-BzzjdWy2.js";import{S as a}from"./SchemaDrivenAnnotationEditor-B8_9P8TZ.js";import"./index-Chi_LkuB.js";import"./useEntity-CeyTu7fv.js";import"./pickBy-CNttmqhF.js";import"./isString-LxXz07Yg.js";import"./_baseIteratee-B6ZKTAjZ.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-BbfstQUl.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DLA8UuOf.js";import"./useSchema-DYdP-W7C.js";import"./index-DhjX6Hoh.js";import"./enums-DECr4vaN.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CkA66oLy.js";import"./uniq-Cf0o9KYj.js";import"./forEach-UWyboym_.js";import"./Add-Q_xBpMGU.js";import"./Grid-Cam_jVY-.js";import"./ListItem-CRt8iXQn.js";import"./listItemButtonClasses-BlMug59m.js";import"./ListItemIcon-BrTxdKrl.js";import"./MenuItem-BVsCkoVz.js";import"./ListItemText-C6zla5eN.js";import"./ArrowUpward-DnpeUYdX.js";import"./ContentCopy-DyMKfx_f.js";import"./FormControlLabel-CPkZMGo3.js";import"./Checkbox-DssC3FEB.js";import"./SwitchBase-Cgw9rMrL.js";import"./FormGroup-Ddg1rAuQ.js";import"./RadioGroup-C-3ri_f5.js";import"./Radio-BgaAjC40.js";import"./Slider-Tn6dHXfb.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog--Me4EPSq.js";import"./DialogBase-CGfYT4BU.js";import"./Close-D2aGDGHY.js";import"./HelpPopover-BVPs66Bt.js";import"./MarkdownPopover-BIgmn6Ru.js";import"./LightTooltip-BMWg9unl.js";import"./MarkdownSynapse-17VbQenC.js";import"./SkeletonButton-BhLIT0JK.js";import"./SkeletonInlineBlock-DNuGrhmv.js";import"./SkeletonTable-CsxmarD8.js";import"./SkeletonParagraph-BgDI2leK.js";import"./JsonSchemaForm-4H-DEnRu.js";import"./GridLegacy-oKfyVass.js";import"./HelpTwoTone-BhYtq_1S.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Bu9cKJtq.js";import"./_createAggregator-C2OdGhGC.js";import"./_baseMap-BcYx9XOM.js";import"./DateTimePicker-DDDd43J8.js";import"./useMobilePicker-keRiPq_4.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BRJxiA-5.js";import"./index-1bES-Dua.js";import"./Chip-NSHEYu7d.js";import"./Tabs-D_KhLSuW.js";import"./KeyboardArrowRight-K9IMsIx_.js";import"./Autocomplete-BAKaVVOT.js";import"./usePreviousProps-CKXyB07W.js";import"./use-deep-compare-effect.esm-CzQgTnBn.js";import"./TextWidget-6ePyRJHb.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Er=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Er as __namedExportsOrder,Ir as default};
