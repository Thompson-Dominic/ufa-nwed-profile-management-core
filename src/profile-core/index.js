/* eslint-disable linebreak-style */
import Profile from './Profile';
import ProfileSetting from './ProfileSetting';
import WorkExperience from './WorkExperience';
import Education from './Education';
import ProfileDTOFactory from './ProfileDTOFactory';
import ProfileRepository from './ProfileRepository';
import DefaultProfileService from './DefaultProfileService';
import { BasicInfoProfile, ComprehensiveProfile } from './dtos';

const ProfileTransferObjects = {
  BasicInfoProfile,
  ComprehensiveProfile,
};

export {
  Profile,
  ProfileSetting,
  WorkExperience,
  Education,
  ProfileDTOFactory,
  ProfileRepository,
  DefaultProfileService,
  ProfileTransferObjects,
};
