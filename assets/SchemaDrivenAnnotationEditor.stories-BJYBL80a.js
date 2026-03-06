import{jv as p}from"./iframe-CaNoDgkX.js";import{S as a}from"./SchemaDrivenAnnotationEditor-B4B5ewD2.js";import"./index-Chi_LkuB.js";import"./useEntity-JB9BrXEu.js";import"./pickBy-BJzWTAWU.js";import"./isString-uXwuBLj9.js";import"./_baseIteratee-CeDu17wK.js";import"./useInfiniteQuery-BwBThpYw.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B68J36lQ.js";import"./useSchema-BYvGrpmi.js";import"./index-B1OLzDUW.js";import"./enums-Bye2Mp1x.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-B_eoSs0M.js";import"./uniq-DRrPV-6o.js";import"./forEach-CWOCpBhE.js";import"./Add-CfoinwFG.js";import"./Grid-De8Oaiq3.js";import"./ListItem-B9Igq2_n.js";import"./listItemButtonClasses-BApiEFYD.js";import"./ListItemIcon-SUFU0CDp.js";import"./MenuItem-ClqCH5V3.js";import"./ListItemText-Bt4wjdA1.js";import"./ArrowUpward-B_WZdB10.js";import"./ContentCopy-ClOf3aXW.js";import"./FormControlLabel-BEu4Df1B.js";import"./Checkbox-CtLr8pt8.js";import"./SwitchBase-CkohN7El.js";import"./FormGroup-B7ZRSweE.js";import"./RadioGroup-Big3OsyV.js";import"./Radio-BkN7YEgr.js";import"./Slider-CbCkD1Cm.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CvYo2dLO.js";import"./DialogBase-ymiBsjv4.js";import"./Close-Cj8W86JB.js";import"./HelpPopover-B-vfXunY.js";import"./MarkdownPopover-Ds9kb0yD.js";import"./LightTooltip-LycdI5lW.js";import"./MarkdownSynapse-BNV4Ce-k.js";import"./SkeletonButton-Cy68UPlr.js";import"./SkeletonInlineBlock-DFgc16ha.js";import"./SkeletonTable-BK7ah3SB.js";import"./SkeletonParagraph-C3PSWy-y.js";import"./JsonSchemaForm-p2PMjuqM.js";import"./GridLegacy-DMs2Xv33.js";import"./HelpTwoTone-CO0XXpHN.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-B4LiwCMB.js";import"./_createAggregator-D1ssWfVs.js";import"./_baseMap-DdX9zoAU.js";import"./DateTimePicker-DsmJCVh9.js";import"./useMobilePicker-BANdqCcx.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BSE4KOHc.js";import"./index-Ck3YdKMk.js";import"./Chip-QjhKE9v8.js";import"./Tabs-DkMAyM6M.js";import"./KeyboardArrowRight-DZ54COQw.js";import"./Autocomplete-C7jsWFY_.js";import"./usePreviousProps-D_Vz-Hwl.js";import"./use-deep-compare-effect.esm-zdPBa97A.js";import"./TextWidget-DeVhqfmk.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ir=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Ir as __namedExportsOrder,vr as default};
