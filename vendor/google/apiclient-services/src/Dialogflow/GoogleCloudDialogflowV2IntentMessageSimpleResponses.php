<?php
/*
 * Copyright 2014 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

namespace Google\Service\Dialogflow;

class GoogleCloudDialogflowV2IntentMessageSimpleResponses extends \Google\Collection
{
  protected $collection_key = 'simpleResponses';
  protected $simpleResponsesType = GoogleCloudDialogflowV2IntentMessageSimpleResponse::class;
  protected $simpleResponsesDataType = 'array';

  /**
   * @param GoogleCloudDialogflowV2IntentMessageSimpleResponse[]
   */
  public function setSimpleResponses($simpleResponses)
  {
    $this->simpleResponses = $simpleResponses;
  }
  /**
   * @return GoogleCloudDialogflowV2IntentMessageSimpleResponse[]
   */
  public function getSimpleResponses()
  {
    return $this->simpleResponses;
  }
}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(GoogleCloudDialogflowV2IntentMessageSimpleResponses::class, 'Google_Service_Dialogflow_GoogleCloudDialogflowV2IntentMessageSimpleResponses');
