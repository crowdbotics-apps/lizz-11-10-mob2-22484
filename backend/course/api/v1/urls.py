from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    CategoryViewSet,
    CourseViewSet,
    EnrollmentViewSet,
    EventViewSet,
    GroupViewSet,
    LessonViewSet,
    ModuleViewSet,
    PaymentMethodViewSet,
    RecordingViewSet,
    SubscriptionViewSet,
    SubscriptionTypeViewSet,
)

router = DefaultRouter()
router.register("enrollment", EnrollmentViewSet)
router.register("recording", RecordingViewSet)
router.register("lesson", LessonViewSet)
router.register("course", CourseViewSet)
router.register("module", ModuleViewSet)
router.register("group", GroupViewSet)
router.register("category", CategoryViewSet)
router.register("subscription", SubscriptionViewSet)
router.register("event", EventViewSet)
router.register("subscriptiontype", SubscriptionTypeViewSet)
router.register("paymentmethod", PaymentMethodViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
