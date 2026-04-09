import{jw as p}from"./iframe-FDH2xSLc.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BAYSb8lO.js";import"./index-Chi_LkuB.js";import"./useEntity-DHBL_oM5.js";import"./pickBy-CFq9MVR5.js";import"./isString-BrgtB96k.js";import"./_baseIteratee-BrA6Zoce.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-B-tinRUO.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D18d3KJd.js";import"./useSchema-CmLeB1rb.js";import"./index-BdrCt2ba.js";import"./enums-D1fiHH8c.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DawTZUlN.js";import"./uniq-CVUh3LnB.js";import"./forEach-UWyboym_.js";import"./Add-FWB-LBAV.js";import"./Grid-DJnNU4pw.js";import"./ListItem-0TZTJ6Vh.js";import"./listItemButtonClasses-CECdSMaA.js";import"./ListItemIcon-Chw-UxIW.js";import"./MenuItem-Cv9z9awV.js";import"./ListItemText-BptveSrZ.js";import"./ArrowUpward-Diwr5dYs.js";import"./ContentCopy-BwbN9Jm4.js";import"./FormControlLabel-BnPk5lfl.js";import"./Checkbox-BctxXkIC.js";import"./SwitchBase-B8j7JnXc.js";import"./FormGroup-Cdk3Ngbj.js";import"./RadioGroup-j9ymDYP8.js";import"./Radio-CutFuYEE.js";import"./Slider-BtFTSsiV.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-D1K99bC1.js";import"./DialogBase-ukX_Dfis.js";import"./Close-DbaBw_Hg.js";import"./HelpPopover-CeMxTcbY.js";import"./MarkdownPopover-BINzzL9F.js";import"./LightTooltip-BxuR9X41.js";import"./MarkdownSynapse-DubjqhF7.js";import"./SkeletonButton-xYbyYL9k.js";import"./SkeletonInlineBlock-CrGk-deJ.js";import"./SkeletonTable-BfwZdIL6.js";import"./SkeletonParagraph-BniWr4_C.js";import"./JsonSchemaForm-qpGITbhD.js";import"./GridLegacy-BVso7dRX.js";import"./HelpTwoTone-C6DNAKXb.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-sZ3hA-zo.js";import"./_createAggregator-CkKKZuBW.js";import"./_baseMap-A80CCfax.js";import"./DateTimePicker-Bh75-OiU.js";import"./useMobilePicker-CQzeQd8T.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DibahqLi.js";import"./index-CzuvZxX2.js";import"./Chip-CzpLZLiP.js";import"./Tabs-QzKVcGsi.js";import"./KeyboardArrowRight-apg4PgRu.js";import"./Autocomplete-t_5KhxxP.js";import"./usePreviousProps-DMYUt7tk.js";import"./use-deep-compare-effect.esm-BMSrz6pl.js";import"./TextWidget-J52SelmT.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
